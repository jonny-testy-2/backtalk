import { BellOff } from "lucide-react";
import { isIOS } from "../platform";

/** iOS-only advisory: the hardware silent switch mutes web audio, and there's
 *  no web API to detect or override it, so we just remind the player. */
export function SilentModeHint() {
	if (!isIOS()) return null;
	return (
		<p className="silent-hint">
			<BellOff />
			Turn off Silent Mode to hear sound
		</p>
	);
}
