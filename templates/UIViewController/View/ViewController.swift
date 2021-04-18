import UIKit

class {{ module.name }}ViewController: UIViewController, {{ module.name }}ViewInput {
    var output: {{ module.name }}ViewOutput!

    override func viewDidLoad() {
        super.viewDidLoad()
        output.viewIsReady()
    }

    // MARK: - {{ module.name }}ViewInput

    func setupInitialState() {

    }
}
