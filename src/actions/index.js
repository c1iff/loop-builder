export function selectLoopType(type) {

  const loopSettings = { Loop1: {
          column: "col-md-4 col-lg-3",
          card: "card",
          innerDiv: "",
          anchor: "video-thumbnail img-fluid",
          image: "img-fluid",
          button: "thumbnail-play-button",
          description: "py-1",
          descriptionTitle: "card-text",
          descriptionText: "card-text text-muted p-1",
          customContent: ["btn btn-outline-warning", "More Info"]
        }, Loop2: {
          column: "col-md-12",
          card: "card-black",
          innerDiv: "horizontal-card d-inline-block",
          anchor: "video-thumbnail float-left w-25 mr-3",
          image: "img-fluid",
          button: "thumbnail-play-button",
          description: "align-right py-1",
          descriptionTitle: "card-text",
          descriptionText: "card-text text-muted",
          customContent: ['<div className="section-line-center align-self-center mb-3"></div>']
        }, Loop3: {
          column: "col-md-4 my-3",
          card: "d-inline-block",
          innerDiv: "",
          anchor: "video-thumbnail img-fluid",
          image: "img-fluid",
          button: "thumbnail-play-button play-button-left",
          description: "card-content-overlay text-white text-center pb-1",
          descriptionTitle: "card-title",
          descriptionText: "card-text text-muted",
          customContent: ["section-line-center align-self-center mb-3"]
        }, Loop4: {
          column: "col-md-12",
          card: "card-black",
          innerDiv: "horizontal-card d-inline-block",
          anchor: "video-thumbnail img-fluid",
          image: "img-fluid",
          button: "thumbnail-play-button",
          description: "align-right py-1",
          descriptionTitle: "card-text",
          descriptionText: "card-text text-muted",
          customContent: ['<div className="section-line-center align-self-center mb-3"></div>']
        }
      }

  const loopType = loopSettings[type.loopType]
    return {
      type: 'CHANGE_LOOP_TYPE',
      payload: loopType
    }
}
