import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useArchiveStore = defineStore("ArchiveStore", () => {
  const archive_URL = "http://localhost:4000/archive";
  let archivedData = ref([]);

  const fetchArchivedData = async () => {
    try {
      const r = await axios.get(archive_URL);
      archivedData.value = r.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { archivedData, fetchArchivedData };
});
