/* eslint-disable react/prop-types */
export function Content({ children }) {
  return (
    <main className="container mx-auto px-2 py-2 md:px-4 md:py-4 lg:py-0 bg-blue-900/20 text-gray-200">
      {children}
    </main>
  );
}
