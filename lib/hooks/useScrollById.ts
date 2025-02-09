const useScrollById = (callback?: () => void) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }
    element.scrollIntoView({ behavior: "smooth" });

    if (callback) {
      callback();
    }
  };

  return { scrollToSection };
};

export default useScrollById;
