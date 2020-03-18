/**
 * Helper method to determine if a path is a sub-path of another one.
 */
export const isSubPath = (subPath: string, path: string) => {
  return ((a: string[], b: string[]) =>
    a.map((v, i) => b[i] === v).reduce((p, c) => p && c))(
    subPath.split('/').slice(0, path.split('/').length),
    path.split('/')
  );
};
