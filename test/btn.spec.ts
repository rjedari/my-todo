import { mount } from "@vue/test-utils";
import AButton from "@/components/AButton.vue";

export const buttonFactory = (inputs: InstanceType<typeof AButton>) => {
  const wrapper = mount(AButton, {
    props: { btnClass: '' },
    ...inputs
  });
  return wrapper
}

describe("AButton", () => {
  it("renders the button with the correct class", () => {
    const btnClass = "addBtn";
    const wrapper = buttonFactory({props: { btnClass },})
    const button = wrapper.find('button');
    expect(button.classes(btnClass)).toBe(true);
  });
  it("render the slot values", () => {
    const wrapper = buttonFactory({
      slots: {
        default: '<span>test</span>'
      }
    })
    const button = wrapper.find('button');
    expect(button.text()).toMatchSnapshot('test')
  });
});
