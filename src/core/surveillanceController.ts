interface MotionSensor {
  isDetectingMotion(): boolean;
}

interface VideoRecorder {
  startRecording(): void;
  stopRecording(): void;
}

export class FakeSensor implements MotionSensor {
  isDetectingMotion(): boolean {
    return false
  }
}

export class FakeRecorder implements VideoRecorder {
  startRecording(): void {
    console.log('recording...');
  }
  stopRecording(): void {
    console.log('recording...');
  }
}

export class SurveillanceController {
  constructor(private sensor: MotionSensor, private recorder: VideoRecorder){}

  public recordMotion(){
    if(this.sensor.isDetectingMotion()){
      this.recorder.startRecording();
      return;
    }

    this.recorder.stopRecording();
  }
}