use crate::screen::constants::*;
use config::navigation::NavigationMode;
use std::collections::HashMap;
use sugarloaf::components::rect::Rect;

pub struct Text {
    pub position: (f32, f32),
    pub content: String,
    pub font_id: usize,
    pub font_size: f32,
    pub color: [f32; 4],
}

impl Text {
    #[inline]
    pub fn new(
        position: (f32, f32),
        content: String,
        font_id: usize,
        font_size: f32,
        color: [f32; 4],
    ) -> Self {
        Text {
            position,
            content,
            font_id,
            font_size,
            color,
        }
    }
}

pub struct ScreenNavigationColors {
    foreground: [f32; 4],
    active: [f32; 4],
    inactive: [f32; 4],
}

pub struct ScreenNavigation {
    pub mode: NavigationMode,
    pub rects: Vec<Rect>,
    pub texts: Vec<Text>,
    keys: String,
    current: usize,
    colors: ScreenNavigationColors,
    width: f32,
    scale: f32,
}

// width, height
// current_index
//
impl ScreenNavigation {
    pub fn new(
        mode: NavigationMode,
        colors: [[f32; 4]; 3],
        width: f32,
        scale: f32,
    ) -> ScreenNavigation {
        let colors = {
            ScreenNavigationColors {
                inactive: colors[0],
                active: colors[1],
                foreground: colors[2],
            }
        };

        ScreenNavigation {
            mode,
            rects: vec![],
            texts: vec![],
            keys: String::from(""),
            current: 0,
            colors,
            width,
            scale,
        }
    }

    #[inline]
    pub fn content(
        &mut self,
        width: f32,
        scale: f32,
        keys: &str,
        titles: &HashMap<usize, String>,
        current: usize,
        len: usize,
    ) {
        let mut has_changes = false;

        if width != self.width {
            self.width = width;
            has_changes = true;
        }

        if scale != self.scale {
            self.scale = scale;
            has_changes = true;
        }

        if keys != self.keys {
            self.keys = keys.to_string();
            has_changes = true;
        }

        if current != self.current {
            self.current = current;
            has_changes = true;
        }

        if !has_changes {
            return;
        }

        self.rects = vec![];
        self.texts = vec![];

        match self.mode {
            NavigationMode::CollapsedTabs => self.collapsed_tabs(len),
            NavigationMode::Breadcrumb => self.breadcrumb(&titles, len),
            NavigationMode::TopTabs => {
                // self.render_top(sugarloaf, context_manager)
            }
            NavigationMode::BottomTabs => {
                // self.render_top(sugarloaf, context_manager)
            }
        }
    }

    #[inline]
    pub fn collapsed_tabs(&mut self, len: usize) {
        let mut initial_position = (self.width / self.scale) - PADDING_X_COLLAPSED_TABS;
        let position_modifier = 20.;
        for i in 0..len {
            let mut color = self.colors.inactive;
            let mut size = INACTIVE_TAB_WIDTH_SIZE;
            if i == self.current {
                color = self.colors.active;
                size = ACTIVE_TAB_WIDTH_SIZE;
            }
            let renderable = Rect {
                position: [initial_position, 0.0],
                color,
                size: [30.0, size],
            };
            initial_position -= position_modifier;
            self.rects.push(renderable);
        }
    }

    #[inline]
    pub fn breadcrumb(&mut self, titles: &HashMap<usize, String>, len: usize) {
        let mut initial_position = (self.width / self.scale) - 100.;
        let position_modifier = 80.;
        let mut min_view = 9;

        if (self.width / self.scale) <= 440. {
            min_view = 1;
        }

        let current_index = self.current;
        let bg_color = self.colors.active;
        let foreground_color = self.colors.inactive;

        let mut main_name = String::from("~");
        if let Some(main_name_idx) = titles.get(&current_index) {
            main_name = main_name_idx.to_string();
        }

        if main_name.len() > 12 {
            main_name = main_name[0..12].to_string();
        }

        let renderable = Rect {
            position: [initial_position, 0.0],
            color: bg_color,
            size: [200., 26.0],
        };

        self.texts.push(Text::new(
            (initial_position - 12., 14.5),
            "".to_string(),
            9,
            23.,
            self.colors.active,
        ));

        self.texts.push(Text::new(
            (initial_position + 4., 13.0),
            format!("{}.{}", current_index + 1, main_name),
            0,
            14.,
            foreground_color,
        ));

        initial_position -= position_modifier;
        self.rects.push(renderable);

        if len <= 1 {
            return;
        }

        let mut iterator = current_index;
        if len - 1 == iterator {
            iterator = 0;
        } else {
            iterator += 1;
        }

        if min_view == 1 {
            if len > 1 {
                self.texts.push(Text::new(
                    (initial_position + 36., 13.0),
                    format!("+ {}", len - 1),
                    0,
                    13.,
                    self.colors.foreground,
                ));
            }
        } else {
            let mut rendered = len - 1;
            while rendered > 0 {
                if iterator == self.current {
                    continue;
                }

                if initial_position <= 120.0 {
                    self.texts.push(Text::new(
                        (initial_position + 36., 13.0),
                        format!("+ {}", rendered),
                        0,
                        13.,
                        self.colors.foreground,
                    ));
                    break;
                }

                let bg_color = self.colors.inactive;
                let foreground_color = self.colors.active;

                let mut name = String::from("~");
                if let Some(name_idx) = titles.get(&iterator) {
                    name = name_idx.to_string();
                }

                if name.len() > 7 {
                    name = name[0..7].to_string();
                }

                let renderable_item = Rect {
                    position: [initial_position, 0.0],
                    color: bg_color,
                    size: [160., 26.],
                };

                // 
                // 
                // if i == context_manager.len() - 1 {
                self.texts.push(Text::new(
                    (initial_position - 12., 15.0),
                    "".to_string(),
                    10,
                    22.,
                    self.colors.inactive,
                ));
                // }

                self.texts.push(Text::new(
                    (initial_position + 4., 13.0),
                    format!("{}.{}", iterator + 1, name),
                    0,
                    14.,
                    foreground_color,
                ));

                initial_position -= position_modifier;
                self.rects.push(renderable_item);

                if len - 1 == iterator {
                    iterator = 0;
                } else {
                    iterator += 1;
                }

                rendered -= 1;
            }
        }
    }
}
