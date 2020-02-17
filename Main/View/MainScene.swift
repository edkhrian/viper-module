import SpriteKit

class {{ module.name }}Scene: SKScene, {{ module.name }}ViewInput {
    var output: {{ module.name }}ViewOutput!

    override func sceneDidLoad() {
        super.sceneDidLoad()
    }

    override func didMove(to view: SKView) {
        super.didMove(to: view)
    }

    // MARK: - {{ module.name }}ViewInput

}
