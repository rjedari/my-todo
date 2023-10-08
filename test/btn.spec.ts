import { mount } from "@vue/test-utils";
import TheButton from "@/components/AButton.vue";

const buttonFactory = (inputs: InstanceType<typeof TheButton>) => {
  const wrapper = mount(TheButton, {
    props: { btnClass: '' },
    ...inputs
  });
  return wrapper
}

describe("TheButton", () => {
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
