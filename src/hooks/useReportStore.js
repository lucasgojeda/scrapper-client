/** Libraries */
import { useDispatch, useSelector } from "react-redux";

/** Axios Api */
import scrapperApi from "../api/scrapperApi";

/** Slices */
import {
  loadReports,
  newReport,
  uiCloseProgressBackdrop,
  uiOpenProgressBackdrop,
} from "../store/slices";

export const useReportStore = () => {
  const { reports } = useSelector((state) => state.report);

  const dispatch = useDispatch();

  const startCreatingReport = async (name) => {
    try {
      dispatch(uiOpenProgressBackdrop());

      console.log(name);

      const { data, status } = await scrapperApi.post("scrapper", { name });

      console.log({ status, data });
      dispatch(newReport(data?.report));
      dispatch(uiCloseProgressBackdrop());
    } catch (error) {
      dispatch(uiCloseProgressBackdrop());
      return console.log(error);
    }
  };

  const startLoadingReports = async () => {
    try {
      const { data } = await scrapperApi.get("reports");
      console.log(data);
      dispatch(loadReports(data?.reports));
    } catch (error) {
      return console.log(error);
    }
  };

  return {
    //* Propiedades
    reports,

    //* Métodos
    startCreatingReport,
    startLoadingReports,
  };
};
