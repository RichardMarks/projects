/* eslint-disable react/prop-types */

function CategoryHeader({ icon, iconAlt, name }) {
  return (
    <header className="flex flex-row md:flex-row justify-between items-end mb-4">
      <div className="">
        <img
          className="object-cover object-center w-[64px] md:w-[128px] lg:w-[160px]"
          src={icon}
          alt={iconAlt}
        />
      </div>
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-right tracking-widest">
        {name}
      </h2>
    </header>
  );
}

function CategoryDescription({ description }) {
  return Array.isArray(description) ? (
    <>
      {description.map((text, index) => {
        const key = `category-description-${index}`;
        const isLast = index === description.length - 1;
        return isLast ? (
          <p
            key={key}
            className="text-lg lg:text-xl text-justify leading-relaxed drop-shadow-lg tracking-wide lg:tracking-wider"
          >
            {text}
          </p>
        ) : (
          <p
            key={key}
            className="text-lg lg:text-xl text-justify leading-relaxed mb-10 drop-shadow-lg tracking-wide lg:tracking-wider"
          >
            {text}
          </p>
        );
      })}
    </>
  ) : (
    <p className="text-lg lg:text-xl text-justify leading-relaxed drop-shadow-lg tracking-wide lg:tracking-wider">
      {description}
    </p>
  );
}

export function Category({ id, icon, iconAlt, name, description }) {
  return (
    <section
      id={`category-${id || "FIXME"}`}
      className="pt-[64px] lg:mx-auto lg:max-w-7xl mb-10"
    >
      <CategoryHeader icon={icon} iconAlt={iconAlt} name={name} />
      <CategoryDescription description={description} />
    </section>
  );
}
