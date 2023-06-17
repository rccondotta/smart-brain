const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + "your-api-key");

const handleApiCall = (req, res) => {

    console.log(req.body.input);
    stub.PostModelOutputs(
        {
            user_app_id: {
                "user_id": "your-user-id",
                "app_id": "your-app-id"
            },
            model_id: "face-detection",
            inputs: [
                { data: { image: { url: req.body.input } } }
            ]
        },
        metadata,
        (err, response) => {
            if (err) {
                throw new Error(err);
            }

            if (response.status.code !== 10000) {
                throw new Error("Post model outputs failed, status: " + response.status.description);
            }

            // Since we have one input, one output will exist here.
            const output = response.outputs[0];

            console.log("Predicted concepts:");
            for (const concept of output.data.concepts) {
                console.log(concept.name + " " + concept.value);
            }
            res.json(response)
        }
    );
}

const handleImage = (db) => (req, res) => {

    const { id } = req.body;

    db('users').where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.json(entries[0].entries);
        })
        .catch( err => res.status(400).json("unable to get entries"));
}

module.exports = {
    handleImage: handleImage,
    handleApiCall: handleApiCall
}