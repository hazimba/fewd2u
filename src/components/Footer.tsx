const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center border-t border-zinc-200 dark:border-zinc-700 h-24">
      <p className="text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} FEWD2U. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
