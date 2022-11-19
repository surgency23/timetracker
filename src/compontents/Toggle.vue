<template>
  <label class="container">
    <span class="toggleName">{{toggleName}}</span>
    <input
      v-bind="$attrs"
      class="input"
      type="checkbox"
      :checked="checked"
      @change="$emit('update:checked', $event.target.checked)"
    />
    <span class="toggle"></span>
    <!-- <span class="timestamp" v-if="checked==true"></span>{{}} -->
  </label>
</template>
  
  <script>
export default {
  name: "Toggle",
  props: {
    toggleName: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default:false
    },
    uuid:{
      type:String,
    },
    timestamp:{
      type: Date
    }
  },
};
</script>
<style scoped>
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      
    }
    .timestamp{
      margin-left: 12px;
      
    }

    .toggleName {
      margin-right: 12px;
      color: #1a202c;
      /* Show an ellipsis if the text takes more than one line */
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    /* Visually hide the checkbox input */
    .input {
      
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
    .toggle {
      
      --toggle-container-width: 50px;
      --toggle-size: calc(var(--toggle-container-width) / 2);
      --light-gray: #e2e8f0;
      --gray: #cbd5e0;
      --dark-gray: #a0aec0;
      --teal: #4fd1c5;
      --dark-teal: #319795;
      /* Vertically center the inner circle */
      display: flex;
    
      position: relative;
      height: var(--toggle-size);
      flex-basis: var(--toggle-container-width);
      /* Make the container element rounded */
      border-radius: var(--toggle-size);
      background-color: var(--light-gray);
      /* In case the label gets really long, the toggle shouldn't shrink. */
      flex-shrink: 0;
      transition: background-color 0.25s ease-in-out;
    }
    .toggle::before {
      content: "";
      position: absolute;
      /* Move a little bit the inner circle to the right */
      left: 1px;
      height: calc(var(--toggle-size) - 4px);
      width: calc(var(--toggle-size) - 4px);
      /* Make the inner circle fully rounded */
      border-radius: 9999px;
      background-color: white;
      border: 2px solid var(--light-gray);
      transition: transform 0.375s ease-in-out;
    }
    .input:checked + .toggle {
      background-color: var(--teal);
    }
    .input:checked + .toggle::before {
      border-color: var(--teal);
      /* Move the inner circle to the right */
      transform: translateX(
        calc(var(--toggle-container-width) - var(--toggle-size))
      );
    }
    .input:focus + .toggle::before {
      border-color: var(--gray);
    }
    .input:focus:checked + .toggle::before {
      border-color: var(--dark-teal);
    }
    .input:disabled + .toggle {
      background-color: var(--gray);
    }
    .input:disabled + .toggle::before {
      background-color: var(--dark-gray);
      border-color: var(--dark-gray);
    }
    </style>