import CMS from "netlify-cms-app";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";

CMS.registerPreviewStyle("/css/dark.css");
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.init();
