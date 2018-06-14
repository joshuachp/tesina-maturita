import { Component, OnInit } from '@angular/core';

import * as tf from '@tensorflow/tfjs';

@Component({
    selector: 'app-linear',
    templateUrl: './linear.component.html',
    styleUrls: ['./linear.component.scss']
})
export class LinearComponent implements OnInit {

    linearModel: tf.Sequential;
    prediction: any;

    constructor() { }

    ngOnInit() {
    }

    async trainNewModel() {
        this.linearModel = tf.sequential();
        this.linearModel.add(tf.layers.dense({ units: 1, inputShape: [1] }));

        this.linearModel.compile({ loss: 'meanSquareError', optimizer: 'sgd' })

        const xs = tf.tensor1d([3.2, 4.4, 5.5]);
        const ys = tf.tensor1d([1.6, 2.7, 3.5]);

        // Train
        await this.linearModel.fit(xs, ys)

        console.log('model trained!')
    }

    predict(val: number) {
        const output = this.linearModel.predict(tf.tensor2d([val], [1, 1])) as any;
        this.prediction = Array.from(output.dataSync())[0]
    }

}
