import Foundation

@objc public class BlockApps: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
