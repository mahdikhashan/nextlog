/* eslint-disable @next/next/no-img-element */
type Author = {
  name: string;
  avatar: string;
};

type Props = {
  authors: Author[];
};

function Authors(props: Props) {
  const { authors } = props;

  return (
    <div className="flex -space-x-2 relative z-0 mt-6">
      <div className="flex -space-x-1 overflow-hidden">
        <div>
          {authors &&
            authors.map((author, index) => (
              <img
                key={index}
                className="inline-block size-8 rounded-full"
                src={author.avatar}
                alt={author.name}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export { Authors };
