
/**
 * Recorded videos must be process. This is the process state.
 * 
 * See: https://developers.bingewave.com/types#video_processing_states
 */
const recording_state = {
    UNPROCESSED : 0,
    PROCESSING : 1,
    FINISHED : 2,
    PROBLEM : 3,
    REPROCESS : 4
}

export default recording_state;