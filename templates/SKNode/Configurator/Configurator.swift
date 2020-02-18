import SpriteKit

class {{ module.name }}ModuleConfigurator {
    static func createModule(_ onConfig: (({{ module.name }}ModuleInput) -> {{ module.name }}ModuleOutput?)? = nil) -> SKNode {
        let node = {{ module.name }}Node()
        let presenter = {{ module.name }}Presenter()
        let interactor = {{ module.name }}Interactor()
        let router = {{ module.name }}Router()

        node.output = presenter
        presenter.view = node
        presenter.router = router
        presenter.interactor = interactor
        router.node = node
        interactor.output = presenter
        presenter.moduleOutput = onConfig?(presenter)

        presenter.viewIsReady()

        return node
    }
}
