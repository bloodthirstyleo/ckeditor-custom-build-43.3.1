import Plugin from "@ckeditor/ckeditor5-core/src/plugin";

export default class FontSizePtPlugin extends Plugin {
  afterInit() {
    const editor = this.editor;
    const conversion = editor.conversion;

    conversion.for("downcast").elementToAttribute.delete("fontSize");

    conversion.for("downcast").attributeToElement({
      model: "fontSize",
      view: (modelAttributeValue) => {
        if (!modelAttributeValue) return;

        return {
          name: "span",
          styles: {
            "font-size": modelAttributeValue,
          },
        };
      },
      converterPriority: "high",
    });
  }
}
