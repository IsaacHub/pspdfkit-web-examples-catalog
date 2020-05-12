import PSPDFKit from "pspdfkit";

export function load(defaultConfiguration) {
  return PSPDFKit.load(defaultConfiguration).then(instance => {
    instance.addEventListener("viewState.change", event => {
      console.log("Viewstate change", event);
    });
    console.log("PSPDFKit for Web successfully loaded!!", instance);
    return instance;
  });
}
