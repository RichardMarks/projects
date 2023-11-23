/* eslint-disable react/prop-types */
export function Link({ href, children, ...passthrough }) {
  return (
    <a {...passthrough} href={href}>
      {children}
    </a>
  );
}
