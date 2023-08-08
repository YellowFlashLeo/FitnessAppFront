import { useMutation } from "@tanstack/react-query";
import { CustomError } from "../entities/CustomError";
import { TrainingDto } from "../entities/TrainingDto";
import { axiosInstance } from "../services/api-client";
import useTrainingQueryStore from "../store/trainingStore";

const useSaveTraining = ()=>{
  const resetTraining = useTrainingQueryStore((s)=>s.resetTraining);

   return useMutation(
      (training:TrainingDto) =>
        axiosInstance.post('/TrainingDay/saveTraining', training),
      {
        onSuccess: () => { 
         resetTraining();
        },
        onError: (error:CustomError) => {
        }
      }
    );
}

export default useSaveTraining;