class TodoPage {
  get addTodoButton() {
    return $('id=btnFab');
  }

  get titleInput() {
    return $('id=txtTitle');
  }

  get notesInput() {
    return $('id=txtNotes');
  }

  get highPriorityRadio() {
    return $('id=radioHigh');
  }

  get lowPriorityRadio() {
    return $('id=radioLow');
  }  

  get addButton() {
    return $('id=btnAdd');
  }

  async goToAddTodo() {
    await this.addTodoButton.click();
  }  

  async checkTodo(title: string) {
    const titles = await $$('id=txtTitle');
    const checks = await $$('id=checkTask');

    for (let i = 0; i < titles.length; i++) {
      const text = await titles[i].getText();
      if (text === title) {
        await checks[i].click();
        return;
      }
    }

    throw new Error(`Todo with title "${title}" not found`);
  }

  async editTodo(title: string) {
    const titles = await $$('id=txtTitle');
    const editIcons = await $$('id=imgEdit');

    for (let i = 0; i < titles.length; i++) {
      const text = await titles[i].getText();
      if (text === title) {
        await editIcons[i].click();
        return;
      }
    }

    throw new Error(`Edit icon for "${title}" not found`);
  }

  async isTodoExist(title: string) {
    const titles = await $$('id=txtTitle');

    for (const el of titles) {
      const text = await el.getText();
      if (text === title) {
        throw new Error(`Todo "${title}" still exists`);
      }
    }
  }


  async fillTodo(title: string, notes: string) {
    await this.titleInput.setValue(title);
    await this.notesInput.setValue(notes);
  }

  async selectHighPriority() {
    await this.highPriorityRadio.click();
  }

  async selectLowPriority() {
    await this.lowPriorityRadio.click();
  }  

  async submit() {
    await this.addButton.click();
  }
}

export default new TodoPage();
