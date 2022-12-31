import redirect from "nextjs-redirect";

import React from "react";

export const Re = ({ url }) => {
  console.log(url);
  const Redirect = redirect(url);
  return <Redirect></Redirect>;
};
