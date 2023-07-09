import { useEffect } from "react";

function SetTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export { SetTitle };
