type GalleryDetailsProps = {
  title: string;
  descriptions: string[];
};

export function GalleryDetails({ title, descriptions }: GalleryDetailsProps) {
  return (
    <div className="order-2 lg:order-1 space-y-5 pb-10">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl lg:text-4xl uppercase leading-10 md:leading-12 lg:leading-14 pb-2">
          {title}
        </h2>

        {descriptions.map((description) => (
          <p key={description} className="text-base lg:text-lg">
            {description}
          </p>
        ))}
      </div>
    </div>
  );
}
