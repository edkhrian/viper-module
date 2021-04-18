import UIKit

class {{ module.name }}ModuleConfigurator {
    static let storyboardId = "Main"
    static let storyboardViewId = "{{ module.name }}ViewController"

    static func createModule(_ onConfig: (({{ module.name }}ModuleInput) -> {{ module.name }}ModuleOutput?)? = nil) -> UIViewController {
        let storyboard = UIStoryboard(name: storyboardId, bundle: nil)

        guard let view = storyboard.instantiateViewController(withIdentifier: storyboardViewId) as? {{ module.name }}ViewController else {
            return UIViewController()
        }
        let presenter = {{ module.name }}Presenter()
        let interactor = {{ module.name }}Interactor()
        let router = {{ module.name }}Router()

        view.output = presenter
        presenter.view = view
        presenter.router = router
        presenter.interactor = interactor
        router.viewController = view
        interactor.output = presenter
        presenter.moduleOutput = onConfig?(presenter)

        return view
    }
}
