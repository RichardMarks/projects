export function getVideoId(url) {
  const match = url.match(
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  );

  if (match && match[2].length === 11) {
    return match[2];
  }

  console.log(`The supplied URL ${url} is not a valid youtube URL`);

  return null;
}
