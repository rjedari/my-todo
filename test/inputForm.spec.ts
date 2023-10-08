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

  it("renders the button with the correct class", () => {
    const btnClass = "addBtn";
    const wrapper = buttonFactory({ props: { btnClass: "addBtn" } });

    expect(wrapper.find("button").classes()).toContain(btnClass);
  });
  //or
  it("renders the button with the correcr class with snapshot", () => {
    const btnClass = '<AButton :btn-class="addBtn"/> ';
    const wrapper = mount(AButtonVue)
    expect (wrapper.text()).toMatchSnapshot(btnClass)
  });
});
