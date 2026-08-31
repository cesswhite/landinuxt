// Apply persisted Nuxt UI colors before first paint (prevents theme flash).
// Pattern: https://github.com/nuxt/ui/blob/v4/docs/app/plugins/theme.ts

export default defineNuxtPlugin({
  enforce: 'post',
  setup() {
    const appConfig = useAppConfig()

    if (import.meta.client) {
      const primary = localStorage.getItem('nuxt-ui-primary')
      if (primary) {
        appConfig.ui.colors.primary = primary
      }

      const neutral = localStorage.getItem('nuxt-ui-neutral')
      if (neutral) {
        appConfig.ui.colors.neutral = neutral
      }
    }

    if (import.meta.server) {
      useHead({
        script: [{
          innerHTML: `
            (function() {
              var primaryColor = localStorage.getItem('nuxt-ui-primary');
              var neutralColor = localStorage.getItem('nuxt-ui-neutral');
              if (!primaryColor && !neutralColor) return;
              function swapColors(el) {
                var html = el.innerHTML;
                if (primaryColor && primaryColor !== 'black') {
                  html = html.replace(
                    /(--ui-color-primary-\\d{2,3}:\\s*var\\(--color-)${appConfig.ui.colors.primary}(-\\d{2,3}.*?\\))/g,
                    \`$1\${primaryColor}$2\`
                  );
                }
                if (neutralColor) {
                  html = html.replace(
                    /(--ui-color-neutral-\\d{2,3}:\\s*var\\(--color-)${appConfig.ui.colors.neutral}(-\\d{2,3}.*?\\))/g,
                    \`$1\${neutralColor === 'neutral' ? 'old-neutral' : neutralColor}$2\`
                  );
                }
                el.innerHTML = html;
              }
              var colorsEl = document.querySelector('style#nuxt-ui-colors');
              if (colorsEl) {
                swapColors(colorsEl);
              } else {
                var obs = new MutationObserver(function(mutations) {
                  for (var i = 0; i < mutations.length; i++) {
                    for (var j = 0; j < mutations[i].addedNodes.length; j++) {
                      var node = mutations[i].addedNodes[j];
                      if (node.id === 'nuxt-ui-colors') {
                        swapColors(node);
                        obs.disconnect();
                        return;
                      }
                    }
                  }
                });
                obs.observe(document.head, { childList: true });
              }
            })();
          `.replace(/\s+/g, ' '),
          type: 'text/javascript',
          tagPriority: -1,
        }],
      })
    }
  },
})
