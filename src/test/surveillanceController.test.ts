import { FakeRecorder, FakeSensor, SurveillanceController } from "../core/surveillanceController";


describe('The Surveillance Controller', () => {
  it('asks the recorder to stop recording when sensor detects no motion', () => {
    let stopRecording = false;
    const stopRecordingFakeMethod = () => {
      stopRecording = true;
    }
    const sensor = new FakeSensor();
    const recorder = new FakeRecorder();
    recorder.stopRecording = stopRecordingFakeMethod;
    const controller = new SurveillanceController(sensor, recorder);

    controller.recordMotion();

    expect(stopRecording).toBeTruthy();
  })

  it('asks the recorder to start recording when sensor detects motion', () => {
    let starRecording = false;
    let motion = true;
    const startRecordingFakeMethod = () => {
      starRecording = true;
    }
    const detectMotionCallFake = () => {
      return motion;
    }
    const sensor = new FakeSensor();
    sensor.isDetectingMotion = detectMotionCallFake;
    const recorder = new FakeRecorder();
    recorder.startRecording = startRecordingFakeMethod;
    const controller = new SurveillanceController(sensor, recorder);

    controller.recordMotion();

    expect(starRecording).toBeTruthy();
  })
})