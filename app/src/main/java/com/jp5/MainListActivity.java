package com.jp5;

import android.app.ListActivity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

import com.wikitude.apptemplate.R;

public class MainListActivity extends ListActivity {

	public static final String EXTRAS_KEY_ACTIVITY_TITLE_STRING = "activityTitle";
	public static final String EXTRAS_KEY_ACTIVITY_ARCHITECT_WORLD_URL = "activityArchitectWorldUrl";

	public static final String EXTRAS_KEY_ACTIVITY_IR = "activityIr";
	public static final String EXTRAS_KEY_ACTIVITY_GEO = "activityGeo";

	public static final String EXTRAS_KEY_ACTIVITIES_ARCHITECT_WORLD_URLS_ARRAY = "activitiesArchitectWorldUrls";
	public static final String EXTRAS_KEY_ACTIVITIES_TILES_ARRAY = "activitiesTitles";
	public static final String EXTRAS_KEY_ACTIVITIES_CLASSNAMES_ARRAY = "activitiesClassnames";

	public static final String EXTRAS_KEY_ACTIVITIES_IR_ARRAY = "activitiesIr";
	public static final String EXTRAS_KEY_ACTIVITIES_GEO_ARRAY = "activitiesGeo";

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		this.setContentView(this.getContentViewId());

		this.setTitle(this.getActivityTitle());

		/* extract names of samples from res/arrays */
		final String[] values = this.getListLabels();

		/* use default list-ArrayAdapter */
		this.setListAdapter(new ArrayAdapter<String>(this,
				android.R.layout.simple_list_item_1, android.R.id.text1, values));
        Log.i("Debug", "MainSamplesListActivity ");
    }

	@Override
	protected void onListItemClick(ListView l, View v, int position, long id) {
		super.onListItemClick(l, v, position, id);
        Log.i("info",""+position);
		/* get className of activity to call when clicking item at position x */
		final String className = getListActivities()[position];
           Log.i("classname",className);
		try {

			final Intent intent = new Intent(this, Class.forName(className));
			intent.putExtra(EXTRAS_KEY_ACTIVITY_TITLE_STRING,
					this.getListLabels()[position]);
			intent.putExtra(EXTRAS_KEY_ACTIVITY_ARCHITECT_WORLD_URL,this.getArchitectWorldUrls()[position]);
			/*intent.putExtra(EXTRAS_KEY_ACTIVITY_IR,
					this.getActivitiesIr()[position]);
			intent.putExtra(EXTRAS_KEY_ACTIVITY_GEO,
					this.getActivitiesGeo()[position]);
*/
			/* launch activity */
			this.startActivity(intent);

		} catch (Exception e) {
			/*
			 * may never occur, as long as all SampleActivities exist and are
			 * listed in manifest
			 */
			Toast.makeText(this, className + "\nnot defined/accessible"+e,
                    Toast.LENGTH_LONG).show();
            Log.i("Error",""+e);
		}
	}

	protected final String[] getListLabels() {
		/*return getIntent().getExtras().getStringArray(
				EXTRAS_KEY_ACTIVITIES_TILES_ARRAY);*/
        return new String[]{"1.Image Based","2.Location Based"};
	}

	protected String getActivityTitle() {
		/*return getIntent().getExtras().getString(
				EXTRAS_KEY_ACTIVITY_TITLE_STRING);*/
        return getApplicationContext().getResources().getString(R.string.app_name);
	}

	protected String[] getListActivities() {
		/*return getIntent().getExtras().getStringArray(
				EXTRAS_KEY_ACTIVITIES_CLASSNAMES_ARRAY);*/
        return new String[]{"com.jp5.CamActivity","com.jp5.LocationDisplay"};
	}

	protected String[] getArchitectWorldUrls() {
		/*return getIntent().getExtras().getStringArray(
				EXTRAS_KEY_ACTIVITIES_ARCHITECT_WORLD_URLS_ARRAY);*/
        return new String[]{"Walchand/index.html","new/Locations/index.html"};
	}

	protected boolean[] getActivitiesIr() {
		return getIntent().getExtras().getBooleanArray(
				EXTRAS_KEY_ACTIVITIES_IR_ARRAY);
	}
	
	protected boolean[] getActivitiesGeo() {
		return getIntent().getExtras().getBooleanArray(
				EXTRAS_KEY_ACTIVITIES_GEO_ARRAY);
	}
	
	protected int getContentViewId() {
		return R.layout.list_sample;
	}

}
