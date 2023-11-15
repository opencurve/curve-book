# CHANGELOG of v1.5

## Features

### Local Snapshot
The related functions provided by local snapshots are as follows:
- Create snapshot
- Delete snapshot
- List snapshots
- Protect snapshot
- Unprotect snapshot

### Local Clone

The relevant functions provided by local cloning are as follows:
- Clone, that is, clone a subvolume from a local snapshot
- Flatten, which is to complement the data of the child volume and decouple it from the parent volume and snapshot.
- children, that is, the subvolumes cloned by querying the snapshot of the parent volume or the subvolumes cloned by querying the snapshot.

### Tools-v2 support for local snapshot and local clone

The tools-v2 tool provides a local snapshot command line tool to execute the above-mentioned local snapshot and clone command lines.

For specific instructions on how to use the tool commands, see the documentation: 

[localsnapshotclone_tools_api](../02-CurveBS/08-interface/03-localsnapshotclone_tools_api.md)

### RESTful API interface support for local snapshot and local clone

SnapshotCloneServer provides a RESTful API interface, which provides an interface in the form of RESTful API to perform the above-mentioned local snapshot and cloning functions. In addition, RESTful API interfaces for creating volumes, deleting volumes, and listing volumes are provided.

For specific restfulapi functions, see the documentation: 

[localsnapshotclone_restful_api](../02-CurveBS/08-interface/02-localsnapshotclone_restful_api.md)

The current version's compatibility with the old s3 snapshot-related API functions has not yet been implemented. It is expected to be compatible with the old API in the next version.

### spdk tgt server that supports caching

In particular, the release 1.5 version also supports exporting iscsi volumes through the spdk tgt function. By docking the spdk tgt module, curveadm can create a curve target node that supports caching and mount it to multiple platforms such as windows through iscsi (this part requires curveadm Specific versions support).


