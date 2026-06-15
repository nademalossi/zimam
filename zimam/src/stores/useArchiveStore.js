import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useArchiveStore = defineStore("ArchiveStore", () => {
  const ARCHIVE_URL = "http://localhost:4000/archive";
  let archivedData = ref([]);
  const currentInvoice = ref(null);

  const fetchArchivedData = async () => {
    try {
      const r = await axios.get(ARCHIVE_URL);
      archivedData.value = r.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchInvoiceById = async (id) => {
    try {
      const r = await axios.get(`${ARCHIVE_URL}/${id}`);

      currentInvoice.value = r.data;

      console.log("تم جلب البيان بنجاح:", currentInvoice.value);
    } catch (error) {
      console.error("حدث خطأ أثناء جلب البيان المحدد:", error);
      // يمكنك هنا تفريغ المتغير إذا فشل الجلب
      currentInvoice.value = null;
    }
  };
  return { archivedData, currentInvoice, fetchArchivedData, fetchInvoiceById };
});
