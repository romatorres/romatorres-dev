export const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  sectionId: string
) => {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  const offset = 80;

  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};