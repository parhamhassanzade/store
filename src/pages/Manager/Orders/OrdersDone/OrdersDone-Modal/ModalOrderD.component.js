const ModalOrderD=()=>{
    return(
        <div>
      <Button color="success" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <form dir="rtl" className="d-flex flex-column container ">
            <lable>تصویر کالا</lable>
            <input type="file" name="image" />

            <lable> نام کالا:</lable>
            <input
              style={{ border: "1px solid black" }}
              type="text"
              name="product"
              onChange={(e) => {
                hanelchange("name", e.target.value);
              }}
            />

            <lable>دسته بندی:</lable>
            <select
              onChange={(e) => {
                hanelchange("parentgroup", e.target.value);
              }}
            >
              <option></option>
              <option>لبنیات</option>
              <option>کالاهای اساسی و خواروبار</option>
            </select>

            <lable>توضیحات:</lable>
            <textarea
              onChange={(e) => {
                hanelchange("discription", e.target.value);
              }}
            />
          </form>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-center">
          <Button color="success" onClick={()=>postData()}>
            ذخیره
          </Button>
        </ModalFooter>
      </Modal>
    </div>
    )
}

export {ModalOrderD};