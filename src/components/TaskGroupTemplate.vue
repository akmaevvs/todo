<template>
  <div>
    {{group}}
    <div
      class="title-block"
      :style="`background-color:${group.backgroundColor}; color:${group.textColor}`"
    >
      <p class="title-block__title">
        {{ group.title }}
      </p>
    </div>
    <div class="inner-content">
      <ul class="tasks-block">
        <li
          class="tasks-block__li-task"
          v-for="task in group.tasks"
          :key="task.id"
        >
          <label class="container-complete" :for="task.id">
            <input
              type="checkbox"
              :id="task.id"
              :name="task.id"
              v-model="task.complete"
            />
            <span class="checkmark">
              <template v-if="task.complete">&#10004;</template>
            </span>
          </label>
          <input
            class="tasks-block__input-task"
            type="text"
            v-model="task.title"
            placeholder="Введите задачу"
            disabled
          />
        </li>
      </ul>
      <!-- <div class="add-task-block">
              <standart-button
                @click.prevent="addTask()"
                :style="`background-color:${group.backgroundColor}; color:${group.textColor}`"
                >Добавить задачу</standart-button
              >
              <standart-button
                @click.prevent="saveTask()"
                :style="`background-color:${group.backgroundColor}; color:${group.textColor}`"
                >Сохранить группу задач</standart-button
              >
            </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "task-group-template",
  props: {
    group: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style></style>
