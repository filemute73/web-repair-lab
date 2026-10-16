# Web Repair Lab

Three small, reproducible bug-fix case studies for existing JavaScript/TypeScript-style web applications. Each case contains the original faulty implementation, the corrected implementation, regression tests, and a concise root-cause note.

## Cases

| Case | Symptom | Root cause | Repair |
|---|---|---|---|
| Stale profile | Saved data does not update the dashboard | Existing state is mutated, so subscribers never receive a new reference | Immutable state replacement and explicit notification |
| Order API | `false` is stored as `true`; invalid totals pass through | Unsafe JavaScript coercion | Schema-like parsing with field-specific errors |
| Search race | Older results overwrite the newest query | Out-of-order asynchronous responses | Monotonic request token discards stale responses |

## Verification

```powershell
npm test
```

All examples use Node's built-in test runner and have no external dependencies.

## Delivery standard demonstrated

1. Reproduce the reported symptom.
2. Identify the root cause rather than patching the visible effect.
3. Keep the change narrowly scoped.
4. Add a regression test that fails for the old behavior.
5. Explain the change and any remaining production considerations.

These are original demonstration cases, not representations of paid client work.
