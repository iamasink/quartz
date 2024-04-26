import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      "Home": "https://iamas.ink"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.Description(),
    Component.ContentMeta({ showReadingTime: false }),
    Component.TagList(),
    Component.MobileOnly(Component.TableOfContents()),
    Component.MobileOnly(Component.LineSpacer()),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      sortFn: (a, b) => {
        if ((!a.file && !b.file) || (a.file && b.file)) {
          // Compare creation dates if both items have files
          if (a.file && b.file && a.file.dates?.created && b.file.dates?.created) {
            const createdA = new Date(a.file.dates.created);
            const createdB = new Date(b.file.dates.created);

            // Sort in ascending order
            if (createdA < createdB) {
              return -1;
            } else if (createdA > createdB) {
              return 1;
            } else {
              return 0;
            }
          } else {
            // If neither or both items have files, compare display names
            return a.displayName.localeCompare(b.displayName, undefined, {
              numeric: true,
              sensitivity: "base",
            });
          }
        } else if (a.file && !b.file) {
          // If only 'a' has a file, it should come after 'b'
          return 1;
        } else {
          // If only 'b' has a file, it should come before 'a'
          return -1;
        }
      },
      mapFn: (node) => {
        if (node.file) {
          if (node.file.dates) {
            const date = new Date(node.file.dates.created);
            const formatteddate = date.toISOString()
              .replace(/T.+/, ' ')      // delete the T and everything after
            // node.displayName = formatteddate + " - " + node.displayName
          }
        }
      },

    })),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.MobileOnly(Component.Explorer()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta()
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.MobileOnly(Component.Explorer()),
  ],
}
