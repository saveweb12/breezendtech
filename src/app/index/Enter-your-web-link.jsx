const Enteryourweblink = () => {
  return (
    <>
    <section className="bg_light_1">
        <div className="container">
          <div className="row">
            <div className="col-lg-2" />
            <div className="col-md-8">
              <div className="newsteller style_two">
                <div className="item_scubscribe">
                  <form
                    className="mc4wp-form"
                    method="post"
                    data-name="Subscibe"
                  >
                    <div className="mc4wp-form-fields">
                      <input
                        type="email"
                        name="EMAIL"
                        placeholder="Enter Website Address"
                        required=""
                      />
                      <input
                        type="submit"
                        defaultValue="Get my free proposal"
                      />
                      <div className="text-newsteller">
                        Please enter your website link
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
)
}

export default Enteryourweblink