declare module "*.bib" {
  const bib: {
    id: string;
    type: string;
    author?: string;
    title?: string;
  }[];
  export default bib;
}
