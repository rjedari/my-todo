import { mount } from "@vue/test-utils";
import InputForm from "@/components/InputForm.vue";
import { buttonFactory } from "./btn.spec";
import AButtonVue from "@/components/AButton.vue";

describe("InputForm", () => {
  it('emits an "adding" event when the form is submitted with text', async () => {
    const wrapper = mount(InputForm);
 
    const input = wrapper.find('input[type="text"]');

    await input.setValue("New Task");

    await wrapper.find("form").trigger("submit");

    expect(wrapper.emitted<{ adding: [string] }>("adding")).toEqual([
      ["New Task"],
    ]);
  });
  it('btn component renders corectly ',()=>{
    const wrapper = mount(InputForm);
    const btn =wrapper.findComponent(AButtonVue);
    expect (btn.exists()).toBe(true)


  })

  it("renders the button with the correct class", () => {
    const btnClass = "addBtn";
    const wrapper = buttonFactory({ props: { btnClass: "addBtn" } });

    expect(wrapper.find("button").classes()).toContain(btnClass);
  });
  //this part is only for self practicing 

  it("renders the button with the correcr class with snapshot", () => {
    const btnClass = 'addBtn';
    const wrapper = buttonFactory({ props: { btnClass: "addBtn" } });
    expect (wrapper.element).toMatchSnapshot()
  });
});
