import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AsyncPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [AsyncPipe, TitleCasePipe],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {
  page$: Observable<string | null> = inject(ActivatedRoute).paramMap.pipe(
    map((params) => params.get('page')),
  );
}
