import { mount } from "@vue/test-utils";
import TaskItem from "@/components/TodoList.vue";

describe("TaskItem", () => {
  it("sanity test", () => {
    expect(true).toBe(true);
  });

  it("renders an input element", () => {
    const wrapper = mount(TaskItem, {
      props: {
        text: "Test Task",
        status: false, 
        list: [], 
        id: 1,
      },
    });

    expect(wrapper.find('input[type="checkbox"]').exists()).toBeTruthy();
  });

  it("changes the text class when the checkbox is clicked", async () => {

    const wrapper = mount(TaskItem);
    const textElement = wrapper.find("p");
    const checkbox = wrapper.find('input[type="checkbox"]');
  
     expect(textElement.classes()).not.toContain("done");
     await checkbox.setChecked()
     expect(checkbox.element.checked).toBeTruthy()
     expect(textElement.classes()).toContain("done");
  });

  it("emits 'item-delete' when the delete button is clicked", async () => {
    const wrapper = mount(TaskItem, {
      props: {
        text: "Test Task",
        status: false, 
      
      },
    });

    await wrapper.find(".deleteBtn").trigger("click");

    expect(wrapper.emitted("item-delete")).toBeTruthy();
  });
});
