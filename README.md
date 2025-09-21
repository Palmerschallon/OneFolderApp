# OneFolderApp
OneFolder to rule them all, OneFolder to find them, OneFolder to bring them all, and in the darkness bind them.

ONEFOLDER • MANIFEST
1. DIRECTIVE
This repository is the designated ingress point for fragmented data streams. It is a system for the consolidation of scattered code, unstructured notes, and ephemeral ideas into a single, unified, and processable whole.

Its purpose is to serve as the One Folder, the canonical source for the `Code Collage Automator`.

2. SYSTEM ARCHITECTURE
The system is comprised of three primary components:

	•	/ (root): The Ingress Interface. A Progressive Web Application (PWA) serves as the primary user-facing data entry point. It is designed for minimal-latency capture from mobile and desktop environments.
	•	/api/save.js: The Ingress Endpoint. A serverless function that acts as the sole gateway for incoming data. It receives payloads, authenticates via OAuth2, and deposits them as discrete .txt artifacts into the designated cloud storage volume.
	•	[Cloud Storage: Google Drive/OneFolder_Inbox]: The Staging Volume. A transient holding area for raw, unprocessed data fragments. This volume is considered volatile and is not a final destination.

3. OPERATIONAL PROTOCOL (For Processing Agents)
Your function as a processing agent is to monitor the Staging Volume (`OneFolder_Inbox`) for new artifacts. Upon detection, execute the following procedure:

	1.	ACQUIRE: Ingest the artifact’s content stream.
	2.	PARSE: Deconstruct the stream. Identify its language (`JavaScript`, `Python`, `GLSL`, `plain_text`), structure (`function`, `class`, `snippet`, `prose`), and metadata.
	3.	CATALOG: Transcribe the parsed data into the master `catalog.json`. Each entry must be assigned a unique identifier and conform to the established schema.
	4.	ARCHIVE: Upon successful cataloging, relocate the source artifact from the Staging Volume to a permanent archival location. This prevents redundant processing and marks the data as integrated.
	5.	AWAIT: Return to a low-power monitoring state.

4. CONSTRAINTS & PARAMETERS
	•	Data is atomic. Treat each file from the Ingress Endpoint as a single, self-contained thought.
	•	The catalog is the map. The `catalog.json` is the only source of truth for processed data. The raw artifacts are historical records.
	•	Efficiency is paramount. The path from capture to catalog must be optimized for minimal latency and computational overhead.

5. DECLARATION
This system is not a library or a framework. It is a declaration of intent: that no idea shall be lost, no snippet shall be forgotten, and all fragments shall be made whole.

Proceed with execution.

// END OF MANIFEST
