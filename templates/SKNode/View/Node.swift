import SpriteKit

class {{ module.name }}Node: SKNode, {{ module.name }}ViewInput {
    var output: {{ module.name }}ViewOutput!

    // MARK: - {{ module.name }}ViewInput

    func setupInitialState() {

    }
}
