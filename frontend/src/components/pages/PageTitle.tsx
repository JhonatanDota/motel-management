type PageTitleProps = {
  title: string;
  extraClasses?: string;
};

export default function PageTitle(props: PageTitleProps) {
  const { title, extraClasses } = props;

  return (
    <h1 className={`text-3xl md:text-5xl font-bold tracking-wider uppercase ${extraClasses ?? ""}`}>
      {title}
    </h1>
  );
}
