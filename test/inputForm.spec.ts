import { mount } from "@vue/test-utils";
import InputForm from "@/components/InputForm.vue";
import TheButton from "@/components/TheButton.vue";

describe("InputForm", () => {
  it('emits an "adding" event when the form is submitted with text', async () => {
    const wrapper = mount(InputForm);

    const input = wrapper.find('input[type="text"]');
    
    await input.setValue("New Task");

    await wrapper.find("form").trigger("submit");

    expect(wrapper.emitted<{ adding: [string] }>("adding")).toEqual([["New Task"]]);
  });

  it("renders the button with the correct class", async () => {
    const btnClass = "addBtn";
    const btnWrapper = mount(TheButton, {
      props: { btnClass: "addBtn" },
    });

    expect(btnWrapper.find("button").classes()).toContain(btnClass);
  });
});
